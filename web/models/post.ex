defmodule Clan.Post do
  use Clan.Web, :model

  @creation_fields [:slug, :html, :direct_link]

  schema "posts" do
    field :html, :string
    field :slug, :string
    field :direct_link, :string

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, @creation_fields)
  end

  def creation(params) do
    %Clan.Post{}
    |> cast(params, @creation_fields)
  end
end
