defmodule Clan.Event do
  use Clan.Web, :model

  alias Clan.{Event}

  @creation_fields [:name, :date]

  schema "events" do
    has_many :event_tasks, Clan.EventTask
    field :name, :string
    field :date, :utc_datetime

    timestamps()
  end

  def creation(params) do
    %Event{}
    |> cast(params, @creation_fields)
    |> validate_required(@creation_fields)
  end
end
