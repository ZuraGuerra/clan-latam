defmodule Clan.MasterServices do
  alias Clan.{Repo, GeneralParsers}

  defmacro __using__(_) do
    quote do
      def after_creation(_conn, _entity), do: :ok

      def before_modification(data, action, entity_name) do
        model_module = GeneralParsers.module_name(entity_name, :model)
        case Repo.get(model_module, data["id"]) do
          # The entity exists, so we create a changeset
          # based on the action we want to perform on it
          entity = %{__struct__: ^model_module} ->
            {:ok, apply(model_module,
                        action |> String.to_atom,
                        [entity, data])}
          # The entity doesn't exists (maybe our identificator is invalid)
          nil -> {:error, nil}
        end
      end

      def after_modification(_conn, _entity, _action), do: :ok
    end
  end
end
