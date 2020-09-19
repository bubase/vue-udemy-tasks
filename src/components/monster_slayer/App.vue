<template>
<div id="app">
    <section class="row">
        <div class="small-6 columns">
            <h1 class="text-center">YOU</h1>
            <div class="healthbar" :style="{width: player.HP + '%'}">
                <div class="healthbar text-center" style="background-color: green; margin: 0; color: white;">
                    {{ player.HP }}
                </div>
            </div>
        </div>
        <div class="small-6 columns">
            <h1 class="text-center">MONSTER</h1>
            <div class="healthbar" :style="{width: monster.HP + '%'}">
                <div class="healthbar text-center" style="background-color: green; margin: 0; color: white;">
                    {{ monster.HP }}
                </div>
            </div>
        </div>
    </section>
    <section class="row controls" v-if="!gameIsStarted">
        <div class="small-12 columns">
            <button id="start-game" @click="startGame()">START NEW GAME</button>
        </div>
    </section>
    <section class="row controls" v-else>
        <div class="small-12 columns">
            <button id="attack" @click="attack(player, monster), attack(monster, player), isWin();">ATTACK</button >
            <button id="special-attack" @click="specialAttack(player, monster), attack(monster, player), isWin()">SPECIAL ATTACK</button>
            <button id="heal(player)" @click="heal(player), attack(monster, player)">HEAL</button>
            <button id="give-up" @click="endGame()">GIVE UP</button>
        </div>
    </section>
    <section class="row log" v-if="log.length > 0">
        <div class="small-12 columns">
            <!-- eslint-disable-next-line -->
            <ul v-for="obj in log"> 
                <li :class="{'player-turn': obj.attacker === 'player', 'monster-turn': obj.attacker === 'monster'}">
                    {{ obj.attacker }} {{ obj.action }} {{ obj.defender }} {{ obj.value }}
                </li>
            </ul>
        </div>
    </section>
</div>
</template>

<script>
export default {
    data: function() {
        return {
            gameIsStarted: false,
            player: {
                name: 'player',
                HP: 0,
                attackMin: 6,
                attackMax: 10,
            },
            monster: {
                name: 'monster',
                HP: 0,
                attackMin: 6,
                attackMax: 19,
            },
            log: [],
            playerClass: 'player-turn',
            monsterClass: 'monster-turn',
        }
    },
    methods: {
        startGame: function() {
            this.gameIsStarted = true;
            this.player.HP = 100;
            this.monster.HP = 100;
            this.log = [];
        },
        endGame: function() {
            this.gameIsStarted = false;
        },
        damage: function(attacker) {
            return Math.floor(Math.random() * (attacker.attackMax-attacker.attackMin) + attacker.attackMin);
        },
        attack: function(attacker, defender) {
            const dmg = this.damage(attacker);
            defender.HP -= dmg;
            this.logBattle(attacker.name, defender.name, 'HITS', dmg);
        },
        specialAttack: function(attacker, defender) {
            const dmg = this.damage(attacker) + 5;
            defender.HP -= dmg;
            this.logBattle(attacker.name, defender.name, 'HITS', dmg);
        },
        heal: function(attacker) {
            const healAmount = 20;
            if (this.player.HP <= 85) {
                this.player.HP += healAmount;
            }
            this.logBattle(attacker.name, 'HIMSELF', 'HEAL', healAmount);
        },
        logBattle: function(attacker, defender, action, value) {
            this.log.unshift({attacker, action, defender, value});
        },
        isWin: function() {
            if (this.monster.HP <= 0) {
                const result = window.confirm(this.player.name +  ' WON! New game?');
                if (result) {
                    this.startGame();
                }
                else {
                    this.endGame();
                }
            }
            else if (this.player.HP <= 0) {
                const result = window.confirm(this.player.name +  ' Losing! New game?');
                if (result) {
                    this.startGame();
                }
                else {
                    this.endGame();
                }
            }
        }
    }
};
</script>

<style scoped>
    @import './css/foundation.min.css';
    @import './css/app.css';
</style>