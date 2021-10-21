<template>
    <v-row
        class="mb-5"
    >
        <v-col
            cols="12"
        >
            <v-card>            
                <v-card-title>
                    <p>{{ note.title }}</p>
                </v-card-title>
                <v-card-text>
                    <p>{{ note.description }}</p>
                </v-card-text>
                <v-card-actions
                    class="d-flex justify-end"
                >            
                    <v-btn 
                        color="yellow"
                        @click="callDialog(note.id)"
                    >
                        <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn 
                        color="red"
                        @click="deleteNote()"
                    >
                        <v-icon color="white">mdi-close</v-icon>
                    </v-btn>         
                </v-card-actions>               
            </v-card> 
            <AlterNote
                ref="dialog"
            ></AlterNote>  
        </v-col>
    </v-row>
</template>

<script>
import AlterNote from "@/components/AlterNote.vue";
import {callDialog} from "@/shared.js";

export default {
    name: "NoteCard",
    props: {
        note: Object
    },
    methods: {
        callDialog,
        deleteNote() {
            this.$notes = this.$notes.filter((el) => {
                return el.id !== this.note.id;
            })
        }

    },
    components: {
        AlterNote
    }
}
</script>