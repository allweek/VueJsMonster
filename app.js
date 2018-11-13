var App = new Vue({
    el: '#app',
    data: {
        selfHealth: 100,
        monsterHealth: 100,
        gameResult: "",
        // logs: [],
        // monsterLogs: [],
        isGameEnd: false
    },
    methods: {
        getRandom: function() {
            var rand = Math.round(2 - 0.5 + Math.random() * 9);
            console.log(rand);
            return rand;
        },
        appendLog: function (typeOfLog, text, value) {
            var logsList = document.querySelector('.logs-list');
            var div = document.createElement('li');
            div.className = typeOfLog;
            div.innerHTML = text + value;
            logsList.appendChild(div);
        },
        attack: function() {
            if ((this.selfHealth > 0)&&(this.monsterHealth > 0)) {


                var damage = this.getRandom();
                this.selfHealth -= damage;
                this.selfHealth = (this.selfHealth < 0) ? 0 : this.selfHealth;
                // this.logs.push(damage);
                this.appendLog('self-log', 'damage given to Monster ', damage);

                var damageFromMonster = this.getRandom();
                this.monsterHealth -= damageFromMonster;
                this.monsterHealth = (this.monsterHealth < 0) ? 0 : this.monsterHealth;
                // this.monsterLogs.push(randMonster);
                this.appendLog('monster-log', 'damage taken from Monster ', damageFromMonster);
            };
        },
        heal: function () {

            if (this.selfHealth <= 97) {
                this.selfHealth += 3;
                this.appendLog('heal-log', 'heals +', 3);
            } else {
                this.selfHealth = 100;
            };
        },
        leave: function () {
            document.querySelector('.logs-list').innerHTML = "";
            this.selfHealth = 100;
            this.monsterHealth = 100;
        },
        again: function () {
            this.leave();
            this.isGameEnd = false;
        }
    },
    watch: {
        selfHealth: function(value) {
            if (value <= 0) {
                this.gameResult = "You Lose";
                this.isGameEnd = true;
            };
        },
        monsterHealth: function (value) {
            if (value <= 0) {
                this.gameResult = "You Win !!!!!!";
                this.isGameEnd = true;
            }
        }
    }
});
