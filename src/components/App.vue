<template>
    <div class="container">
        <div class="row">
            <div class="d-lg-none col">
                <action></action>
            </div>
            <div class="col-xl-8 col-lg-7">
                <scoreboard></scoreboard>
                 <field></field>
            </div>
            <div class="d-none d-lg-block col-xl-4 col-lg-5">
                <action></action>
                <box-score></box-score>
                <guide></guide>
            </div>
            <div class="d-lg-none col">
                <box-score></box-score>
                <guide></guide>
            </div>
        </div>
    </div>
</template>

<script>
import Action from './Action.vue'
import Field from './Field.vue'
import Guide from './Guide.vue'
import Scoreboard from './Scoreboard/Scoreboard.vue'
import BoxScore from './BoxScore/BoxScore.vue'

export default {
    components: {Action, Field, Guide, Scoreboard, BoxScore}
}
</script>
