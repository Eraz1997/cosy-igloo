use crate::state::AppState;
use axum::Router;
use axum::routing::get;
use kangaroo_axum::kangarooise;

mod api;

pub fn create_router() -> Router<AppState> {
    Router::new()
        .nest("/api", api::create_router())
        .route("/", get(get_home))
}

#[kangarooise]
async fn get_home() {}
