defmodule Clan.Post do
  use Clan.Web, :model

  @creation_fields [:slug, :html]

  schema "posts" do
    field :html, :string
    field :slug, :string

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, @creation_fields)
    |> validate_required(@creation_fields)
  end
end
