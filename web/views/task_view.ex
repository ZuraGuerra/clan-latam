defmodule Clan.TaskView do
  use Clan.Web, :view

  def render("task.json", %{task: task}) do
    %{
      id: task.id,
      step_id: task.step_id,
      name: task.name
    }
  end
end
