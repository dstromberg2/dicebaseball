<template>
    <tr>
        <td>
            {{ teamName(team) }}
        </td>
        <td v-for="n in highestInning" class="text-center">
            <transition name="scorechange" mode="out-in">
                <span :key="inningScore(n, team)" v-if="n <= inningNumber || n == inningNumber + 1 && team <= inningHalf">
                    {{ inningScore(n, team) }}
                </span>
            </transition>
        </td>
        <td>
            <transition name="scorechange" mode="out-in">
                <span :key="totalScore(team)">
                    {{ totalScore(team) }}
                </span>
            </transition>
        </td>
    </tr>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props: ['team'],
    computed: mapGetters(['highestInning', 'teamName', 'inningNumber', 'inningHalf', 'inningScore', 'totalScore'])
}
</script>

<style lang="scss">
    .scorechange {
        &-enter-active {
            transition: opacity 0.5s, color 1.5s, text-shadow 1.5s;
        }
        &-leave-active {
            transition: opacity 0.2s;
        }
        &-enter {
            opacity: 0;
            color: #009fff;
            text-shadow: 0 0 10px #009fff;
        }
        &-leave-to {
            opacity: 0;
        }
        &-leave, &-enter-to {
            opacity: 1;
            color: #fff;
            text-shadow: 0 0 0 #fff;
        }
    }
</style>
