defmodule Clan.Task do
  use Clan.Web, :model

  @creation_fields [:step_id, :name]

  schema "tasks" do
    belongs_to :step, Clan.Step
    has_many :event_tasks, Clan.EventTask
    field :name, :string

    timestamps()
  end

  def create(struct, params) do
    struct
    |> cast(params, @creation_fields)
    |> validate_required(@creation_fields)
    |> assoc(:step)
  end
end
