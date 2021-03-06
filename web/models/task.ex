defmodule Clan.Task do
  use Clan.Web, :model

  alias Clan.{Task}

  @creation_fields [:step_id, :name, :post_slug]

  schema "tasks" do
    belongs_to :step, Clan.Step
    has_many :event_tasks, Clan.EventTask
    field :name, :string
    field :post_slug, :string

    timestamps()
  end

  def creation(params) do
    %Task{}
    |> cast(params, @creation_fields)
    |> validate_required(@creation_fields)
    |> assoc_constraint(:step)
  end
end
