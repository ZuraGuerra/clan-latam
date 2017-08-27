defmodule Clan.Router do
  use Clan.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", Clan do
    pipe_through :browser # Use the default browser stack

    get "/contenido/:slug", PageController, :render_post
    resources "/post", PostController
    get "/:page", PageController, :render_page
  end

  # Other scopes may use custom stacks.
  scope "/api", Clan do
    pipe_through :api

    post "/:entity_name", MasterController, :create
    post "/:entity_name/:action/", MasterController, :modify
  end
end
