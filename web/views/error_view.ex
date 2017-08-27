defmodule Clan.ErrorView do
  use Clan.Web, :view

  def render("error.json", %{message: message}) do
    %{
      success: false,
      message: message
    }
  end

  def render("error.json", %{changeset_errors: changeset_errors}) do
    %{
      success: false,
      errors: changeset_errors
    }
  end

  def render("404.json", _assigns) do
    %{errors: %{detail: "Page not found"},
      success: false}
  end

  def render("500.json", _assigns) do
    %{errors: %{detail: "Internal server error"},
      success: false}
  end

  # In case no render clause matches or no
  # template is found, let's render it as 500
  def template_not_found(_template, assigns) do
    render "500.json", assigns
  end
end
