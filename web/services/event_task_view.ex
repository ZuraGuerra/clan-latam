defmodule Clan.EventTaskView do
  use Clan.Web, :view

  def render("event-task.json", %{event_task: event_task}) do
    %{
      id: event_task.id,
      is_done: event_task.is_done,
      event_id: event_task.event_id,
      task_id: event_task.task_id
    }
  end
end
