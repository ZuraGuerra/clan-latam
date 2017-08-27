defmodule Clan.GeneralParsers do
  def module_name(name, :model) do
    submodule_name = name # ex. "user_lists"
                   |> String.split(["_", "-"], trim: true) # ["user", "list"]
                   |> Enum.map(&String.capitalize/1) # ["User", "List"]
                   |> Enum.join # "UserList"
    Module.concat(Clan, submodule_name)
  end

  def module_name(name, suffix) when is_atom(suffix) do
    suffix = suffix |> to_string # ex. :services -> "services"
    name = name <> "_" <> suffix # "user_services"
    module_name(name, :model)
  end

  def action(action), do: action |> String.replace("-", "_")
  def entity_name(name),
    do: name |> String.trim_trailing("s") |> String.trim_trailing("e")

  def query_params(params) do
    params # %{"entity_name" => "emitters", "user_id" => 1}
    |> Map.drop(["entity_name"]) #%{"user_id" =>}
    |> Enum.map(&single_query/1)
  end

  def changeset_errors(errors) do
    Enum.map(errors, &single_error/1)
    |> Map.new(fn(error_tuple) -> error_tuple end)
  end

  defp single_error({field, {details, _}}), do: {field, details}

  defp single_query({expression, options}) when is_map(options) do
    options = options # %{"order_by" => "20", "limit" => 10}
            |> Enum.map(&single_query/1) # [order_by: "20", limit: 10]
    {expression, options} |> single_query
  end

  defp single_query({expression, options}),
    do: {expression |> String.to_atom, options}
end
