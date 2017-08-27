defmodule Clan.Repo.Migrations.CreateTask do
  use Ecto.Migration

  def change do
    create table(:steps) do
      add :name, :string
      timestamps()
    end

    create table(:posts) do
      add :html, :text
      add :slug, :string
      timestamps()
    end

    create table(:tasks) do
      add :name, :string
      add :step_id, references(:steps)
      add :post_slug, :string
      timestamps()
    end

    create table(:events) do
      add :name, :string
      add :date, :utc_datetime
      timestamps()
    end

    create table(:event_tasks) do
      add :is_done, :boolean, default: false, null: false
      add :event_id, references(:events)
      add :task_id, references(:tasks)
      timestamps()
    end

    create unique_index(:event_tasks, [:event_id, :task_id])
    create unique_index(:steps, [:name])
    create unique_index(:events, [:name, :date])

  end
end
