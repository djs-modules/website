<template>
	<div class="bg-discord-blurple-500 py-20">
		<div class="max-w-3xl sm:mx-auto text-center px-8 sm:px-16 flex flex-col gap-10 md:px-12">
			<span style="color: white">
				<strong
					>djs-modules is a small organization that contains modules that can create different systems in your Discord
					bot.</strong
				>
			</span>
		</div>
	</div>

	<div
		class="prose prose-discord dark:prose-light lg:prose-lg px-6 mx-auto pb-8 w-full xl:grid xl:grid-cols-2 xl:gap-x-12 xl:max-w-7xl"
	>
		<div>
			<h2>Why we?</h2>
			<span><strong>[⭐] Simple to Use</strong></span> <br />
			<span><strong>[🔑] Writen on TypeScript</strong></span> <br />
			<span><strong>[⚙] 100% Promise-based</strong></span> <br />
			<span><strong>[🙂] Built in Declarations</strong></span> <br />
		</div>

		<div>
			<h2>Our modules</h2>
			<strong
				>› <a href="https://github.com/djs-modules/economy">Economy</a> - a module that allows you to create an economy
				system in your Discord bot.</strong
			>
			<br />
			<strong
				>› <a href="https://github.com/djs-modules/giveaways">Giveaways</a> - a module that allows you to create a
				system of pranks in your Discord bot.</strong
			>
			<br />
			<strong
				>› <a href="https://github.com/djs-modules/moderation">Moderation</a> - a module that allows you to create
				moderation in your Discord bot.</strong
			>
			<br />
			<strong
				>› <a href="https://github.com/djs-modules/leveling">Leveling</a> - is a module that allows you to make a level
				system in your Discord bot.</strong
			>
			<br />
			<strong
				>› <a href="https://github.com/djs-modules/handler">Handler</a> - is a module that allows you to make
				organization of commands/events in your Discord bot.</strong
			>
			<br />
			<strong
				>› <a href="https://github.com/djs-modules/notifier">Notifier</a> - a module that allows you to create a Twitch
				Notification System in your Discord bot.</strong
			>
			<br />
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import EconomySource from '~/data/EconomySource';
import { useStore } from '~/store';

const store = useStore();
const docs = computed(() => store.state.docs);
if (!docs.value) {
	void store.dispatch('fetchDocs', { inputSource: EconomySource });
	void store.dispatch('fetchTags', { currentSource: EconomySource });
}
</script>
