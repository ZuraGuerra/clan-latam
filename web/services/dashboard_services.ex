defmodule Clan.DashboardServices do
  use Clan.Web, :model

  alias Clan.{Repo}

  def form_data(event_id) do
    event = Repo.get!(Clan.Event, event_id)
    raw_menu = step_query() |> Repo.all
    %{
      progress: 0,
      daysRemaining: 87,
      menu: form_menu(raw_menu)
    }
  end

  defp form_menu(raw_menu) do
    Enum.map(raw_menu, fn(step) ->
      %{
        stepId: step.id,
        stepName: step.name,
        items: form_items(step.tasks)
      }
    end)
  end

  defp form_items(items) do
    Enum.map(items, fn(item) ->
      %{
        name: item.name,
        isChecked: false, # change later
        id: item.id,
        postUrl: "/contenido/" <> item.post_slug
      }
    end)
  end

  defp step_query do
    Clan.Step
    |> order_by(:inserted_at)
    |> preload(:tasks)
  end

  defp post_query(slug) do
    Clan.Post
    |> where([post], post.slug == ^slug)
  end
end
