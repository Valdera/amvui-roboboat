#include <Arduino.h>
#include <FunctionalInterrupt.h>

const byte pinA = 0;
const byte pinB = 1;
byte pinALast;
int duration;
boolean direction;

void setup() {
    Serial.begin(115200);
    direction = true;
    pinMode(pinA, INPUT);
    pinMode(pinB, INPUT);
    attachInterrupt(0, callback, CHANGE);
}

void loop() {
    Serial.print("Pulse:");
    Serial.println(duration);
    duration = 0;
    delay(500);
}

void callback() {
    int Lstate = digitalRead(pinA);
    if ((pinALast == LOW) && Lstate == HIGH) {
        int val = digitalRead(pinB);
        if (val == LOW && direction) {
            direction = false;  //Reverse
        } else if (val == HIGH && !direction) {
            direction = true;  //Forward
        }
    }
    pinALast = Lstate;
    if (!direction)
        duration += 4;
    else
        duration -= 4;
}