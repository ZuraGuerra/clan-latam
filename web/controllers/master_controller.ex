defmodule Clan.MasterController do
  use Clan.Web, :controller
  alias Clan.{GeneralParsers,
              Repo,
              SuccessView,
              ErrorView}

  def create(conn, %{"entity_name" => entity_name, "data" => data}) do
    entity_name = GeneralParsers.entity_name(entity_name)
    model_module = GeneralParsers.module_name(entity_name, :model)
    changeset = model_module.creation(data)
    case Repo.insert(changeset) do
      {:ok, created_entity} ->
        # After creation logic (if any)
        entity_name
        |> GeneralParsers.module_name(:services)
        |> apply(:after_creation, [conn, created_entity])

        # Respond to client
        conn
        |> put_status(:created)
        |> render(SuccessView, "success.json", entity_name: entity_name,
                                                      data: created_entity)
      {:error, changeset} ->
        errors = changeset.errors |> GeneralParsers.changeset_errors
        conn
        |> put_status(:unprocessable_entity)
        |> render(ErrorView, "error.json", changeset_errors: errors)
    end
  end

  def modify(conn, %{"data" => data,
                   "action" => action,
              "entity_name" => entity_name}) do
    entity_name = GeneralParsers.entity_name(entity_name)
    services_module = GeneralParsers.module_name(entity_name, :services)
    action = GeneralParsers.action(action)
    # Before modification logic (if any)
    # (this generates a changeset if the data is valid)
    case services_module.before_modification(data, action, entity_name) do
      {:ok, changeset} ->
        case Repo.update(changeset) do
          {:ok, modified_entity} ->
            # After modification logic (if any)
            entity_name
            |> GeneralParsers.module_name(:services)
            |> apply(:after_modification, [conn, modified_entity, action])

            # Respond to client
            conn
            |> put_status(:ok)
            |> render(SuccessView, "success.json", entity_name: entity_name,
                                                          data: modified_entity)
          {:error, changeset} ->
            errors = changeset.errors |> GeneralParsers.changeset_errors
            conn
            |> put_status(:unprocessable_entity)
            |> render(ErrorView, "error.json", changeset_errors: errors)
        end
      {:error, _} ->
        conn
        |> put_status(:not_modified)
        |> render(ErrorView, "error.json", message: "Your request is invalid")
    end
  end

  def show(conn, %{"id" => id, "entity_name" => entity_name}) do
    entity_name = GeneralParsers.entity_name(entity_name)
    model_module = GeneralParsers.module_name(entity_name, :model)
    queries_module = GeneralParsers.module_name(entity_name, :queries)
    case model_module |> queries_module.show(id) |> Repo.one do
      entity = %{__struct__: ^model_module} ->
        conn
        |> put_status(:ok)
        |> render(SuccessView, "success.json", entity_name: entity_name,
                                                      data: entity)
      nil ->
        conn
        |> put_status(:forbidden)
        |> render(ErrorView, "error.json", message: "You cannot access this entity")
    end
  end

  def index(conn, params = %{"entity_name" => entity_name}) do
    entity_name = GeneralParsers.entity_name(entity_name)
    model_module = GeneralParsers.module_name(entity_name, :model)

    queries_module = GeneralParsers.module_name(entity_name, :queries)
    query_params = GeneralParsers.query_params(params)
    case model_module |> queries_module.index(query_params) |> Repo.all do
      entities = [%{__struct__: ^model_module}|_] ->
        conn
        |> put_status(:ok)
        |> render(SuccessView, "success.json", entity_name: entity_name,
                                                      data: entities)
      nil ->
        conn
        |> put_status(:forbidden)
        |> render(ErrorView, "error.json", message: "You cannot access this entity")
    end
  end

end
