use axum::Router;

use crate::state::AppState;

mod health;

pub fn create_router() -> Router<AppState> {
    Router::new().nest("/health", health::create_router())
}
