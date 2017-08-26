# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :clan,
  ecto_repos: [Clan.Repo]

# Configures the endpoint
config :clan, Clan.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "ZOwry5yv51efgOpSFKXh8i+Jq6Gi4DmIfkEEYxjorHUejOqDZdjK0sMKbv4Yn3lK",
  render_errors: [view: Clan.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Clan.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
