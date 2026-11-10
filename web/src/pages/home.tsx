import { BirdhouseIcon } from "lucide-solid";
import type { Component } from "solid-js";
import { Container, HStack, VStack } from "styled-system/jsx";
import { Heading } from "~/components";

export const Home: Component = () => {
	return (
		<Container p="12" h="100dvh" w={{ base: "2xl", lgDown: "full" }}>
			<VStack gap="12" h="full">
				<HStack>
					<BirdhouseIcon size="var(--sizes-12)" />
					<Heading textStyle="4xl">Cosy Igloo</Heading>
				</HStack>
			</VStack>
		</Container>
	);
};
