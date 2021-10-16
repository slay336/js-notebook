<template>
    <v-container>
        <v-row>
            <v-col
                v-for="note in $root.notes"
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
    components: {
        NoteCard,
        AlterNote
    }
}

</script>