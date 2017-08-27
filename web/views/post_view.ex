defmodule Clan.PostView do
  use Clan.Web, :view

  def render("post.json", %{post: post}) do
    %{
      id: post.id,
      html: post.html
    }
  end
end
