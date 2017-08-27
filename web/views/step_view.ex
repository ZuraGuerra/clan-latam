defmodule Clan.StepView do
  use Clan.Web, :view

  def render("step.json", %{step: step}) do
    %{
      id: step.id,
      name: step.name
    }
  end
end
