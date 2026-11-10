import { Route, Router } from "@solidjs/router";
import type { Component } from "solid-js";
import { KangarooProvider } from "./contexts/kangarooContext";
import { Home } from "./pages/home";
import { NotFound } from "./pages/internal/notFound";

export const App: Component = () => {
	return (
		<KangarooProvider>
			<Router>
				<Route path="/" component={Home} />
				<Route path="*404" component={NotFound} />
			</Router>
		</KangarooProvider>
	);
};
