<template>
    <v-container>
        <v-row>
            <v-col
                v-for="note in $notes"
                :key="note.id" 
                :cols="12"
                :sm="6"
                :md="4"
                :lg="3"
                :xl="2"
            >
                <NoteCard     
                    :note="note"
                ></NoteCard>
            </v-col>
        </v-row>
        <v-btn
            v-show="true"
            color="red"
            fab
            dark
            fixed
            bottom
            right
            @click="callDialog($refs.dialog, undefined)"
        >
            <v-icon>mdi-plus</v-icon>    
        </v-btn>
        <AlterNote
            ref="dialog"
        ></AlterNote>
    </v-container>
</template>

<script>
import NoteCard from "@/components/NoteCard.vue";
import AlterNote from "@/components/AlterNote.vue";

export default {
    name: "Notes",
    components: {
        NoteCard,
        AlterNote
    },
    mounted() {
        this.$http.get(`${this.serverUrl}/notes`)
            .then((res) => {
                this.$notes = res.data;
            })
    }
}

</script>