<template>
    <div v-if="isActive">
        <div class="runner" v-bind:class="[currentClass]">
            <img v-if="inningHalf === 0" src="/assets/helmet_visitor.png" />
            <img v-if="inningHalf === 1" src="/assets/helmet_home.png" />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props: ['player'],
    computed: {
        currentAction() {
            return (
                this.player.actions.length > 0 && this.player.actions[this.player.actions.length - 1].inning === this.inningNumber
                ? this.player.actions[this.player.actions.length - 1]
                : false
            )
        },
        currentStep() {
            return (
                this.currentAction && this.currentAction.steps.length > 0
                ? this.currentAction.steps[this.currentAction.steps.length - 1]
                : false
            )
        },
        isActive() {
            return (
                this.currentAction && this.currentStep && this.currentStep !== 'out'
            )
        },
        currentClass() {
            if (this.currentAction.steps.length === 1) {
                return 'to-' + this.currentStep
            }
            return this.currentAction.steps[this.currentAction.steps.length - 2] + '-to-' + this.currentStep

        },
        ...mapGetters(['inningNumber', 'inningHalf'])
    }
}

</script>

<style lang="scss">
    @mixin first() {
        opacity: 1;
        bottom: 32.8%;
        left: 64.4%;
    }
    @mixin second() {
        opacity: 1;
        bottom: 50.6%;
        left: 49.2%;
    }
    @mixin third() {
        opacity: 1;
        bottom: 32.8%;
        left: 34.5%;
    }
    @mixin home() {
        opacity: 1;
        bottom: 15%;
        left: 49.5%;
    }
    .runner {
        position: absolute;
        &.to- {
            &first {
                @include first;
                animation: to-first 1s linear;
            }
            &second {
                @include second;
                animation: to-second 2s linear;
            }
            &third {
                @include third;
                animation: to-third 3s linear;
            }
            &run {
                @include home;
                animation: to-run 4s linear;
                opacity: 0;
            }
        }
        &.first-to- {
            &second {
                @include second;
                animation: first-to-second 1s linear;
            }
            &third {
                @include third;
                animation: first-to-third 2s linear;
            }
            &run {
                @include home;
                animation: first-to-run 3s linear;
                opacity: 0;
            }
        }
        &.second-to- {
            &third {
                @include third;
                animation: second-to-third 1s linear;
            }
            &run {
                @include home;
                animation: second-to-run 2s linear;
                opacity: 0;
            }
        }
        &.third-to-run {
            @include home;
            animation: third-to-run 1s linear;
            opacity: 0;
        }
    }

    @keyframes to-first {
        0% { @include home; }
        100% { @include first; }
    }
    @keyframes to-second {
        0% { @include home; }
        50% { @include first; }
        100% { @include second; }
    }
    @keyframes to-third {
        0% { @include home; }
        33% { @include first; }
        66% { @include second; }
        100% { @include third; }
    }
    @keyframes to-run {
        0% { @include home; }
        25% { @include first; }
        50% { @include second; }
        75% { @include third; }
        100% { @include home; }
    }
    @keyframes first-to-second {
        0% { @include first; }
        100% { @include second; }
    }
    @keyframes first-to-third {
        0% { @include first; }
        50% { @include second; }
        100% { @include third; }
    }
    @keyframes first-to-run {
        0% { @include first; }
        33% { @include second; }
        66% { @include third; }
        100% { @include home; }
    }
    @keyframes second-to-third {
        0% { @include second; }
        100% { @include third; }
    }
    @keyframes second-to-run {
        0% { @include second; }
        50% { @include third; }
        100% { @include home; }
    }
    @keyframes third-to-run {
        0% { @include third; }
        100% { @include home; }
    }
</style>
