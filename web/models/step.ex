defmodule Clan.Step do
  use Clan.Web, :model

  alias Clan.{Step}

  @creation_fields [:name]

  schema "steps" do
    has_many :tasks, Clan.Task
    field :name, :string

    timestamps()
  end

  def creation(params) do
    %Step{}
    |> cast(params, @creation_fields)
    |> validate_required(@creation_fields)
  end
end
