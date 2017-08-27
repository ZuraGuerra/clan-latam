defmodule Clan.SuccessView do
  use Clan.Web, :view
  alias Clan.GeneralParsers

  def render("success.json", %{entity_name: entity_name,
                               data: data}) when is_list(data) do
    %{
      success: true,
      data: render_many(data,
                        GeneralParsers.module_name(entity_name, :view),
                        entity_name <> ".json")
    }
  end

  def render("success.json", %{entity_name: entity_name, data: data}) do
    %{
      success: true,
      data: render_one(data,
                       GeneralParsers.module_name(entity_name, :view),
                       entity_name <> ".json")
    }
  end

end
