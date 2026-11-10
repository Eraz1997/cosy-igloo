import { createContext, createSignal, type JSX, useContext } from "solid-js";

type HomePayload = null;

type KangarooDataPayload = HomePayload;

type KangarooData = {
	consumeHomeData: () => HomePayload | null;
};

const KangarooContext = createContext<KangarooData | undefined>();

export function useKangaroo() {
	const context = useContext(KangarooContext);

	if (!context) {
		throw new Error("useKangaroo must be used inside KangarooProvider");
	}

	return context;
}

export const KangarooProvider = (props: { children: JSX.Element }) => {
	const [consumed, setIsConsumed] = createSignal<boolean>(false);

	const kangarooDataRaw = JSON.parse(
		document.getElementById("kangaroo-data")?.textContent ?? "null",
	);
	const kangarooData =
		kangarooDataRaw && !kangarooDataRaw.errorMessage ? kangarooDataRaw : null;

	const consumeData = (): KangarooDataPayload | null => {
		const wasConsumed = consumed();
		setIsConsumed(true);
		return wasConsumed ? null : kangarooData;
	};

	return (
		<KangarooContext.Provider
			value={{
				consumeHomeData: () => {
					const data = consumeData();
					return data && "balance" in data ? data : null;
				},
			}}
		>
			{props.children}
		</KangarooContext.Provider>
	);
};
