defmodule Clan.Step do
  use Clan.Web, :model

  @creation_fields [:name]

  schema "steps" do
    has_many :tasks, Clan.Task
    field :name, :string

    timestamps()
  end

  def create(struct, params) do
    struct
    |> cast(params, @creation_fields)
    |> validate_required(@creation_fields)
  end
end
