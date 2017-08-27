defmodule Clan.PageController do
  use Clan.Web, :controller

  alias Clan.DashboardServices

  def render_page(conn, %{"page" => "dashboard"}) do
    event = Clan.Event |> Repo.all |> Enum.at(0)
    data = DashboardServices.form_data(event.id)
    conn |> render("dashboard.html", data: data)
  end

  def render_page(conn, %{"page" => page}), do: conn |> render(page <> ".html")
end
