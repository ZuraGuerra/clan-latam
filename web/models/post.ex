defmodule Clan.Post do
  use Clan.Web, :model

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
    |> cast(params, [:html])
    |> validate_required([:html])
  end
end
