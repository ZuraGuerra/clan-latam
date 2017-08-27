defmodule Clan.EventView do
  use Clan.Web, :view

  def render("event.json", %{event: event}) do
    %{
      id: event.id,
      name: event.name,
      date: event.date
    }
  end
end
