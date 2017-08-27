defmodule Clan.EventTask do
  use Clan.Web, :model

  @creation_fields [:event_id, :task_id, :is_done]

  schema "event_tasks" do
    belongs_to :event, Clan.Event
    belongs_to :task, Clan.Task
    field :is_done, :boolean, default: false

    timestamps()
  end

  def create(struct, params) do
    struct
    |> cast(params, @creation_fields)
    |> validate_required(@creation_fields)
    |> assoc(:event)
    |> assoc(:task)
  end
end
