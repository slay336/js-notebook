<template>
    <v-container>
        <v-row>
            <v-col
                v-for="note in notes"
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
        <AlterNote></AlterNote>
    </v-container>
</template>

<script>
import NoteCard from "@/components/NoteCard.vue";
import AlterNote from "@/components/AlterNote.vue";

export default {
    name: "Notes",
    data() {
        return {
            notes: [
                {
                    id: 1,
                    title: "Title 1",
                    description: "Description 1"
                },
                {
                    id: 2,
                    title: "Title 2",
                    description: "Description 2"
                },
                {
                    id: 3,
                    title: "Title 3",
                    description: "Description 3"
                },
                {
                    id: 4,
                    title: "Title 4",
                    description: "Description 4"
                }
            ]
                
        }
    },
    components: {
        NoteCard,
        AlterNote
    }
}

</script>