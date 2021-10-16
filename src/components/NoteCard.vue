<template>
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
            <v-btn color="yellow">
                <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn color="red">
                <v-icon color="white">mdi-close</v-icon>
            </v-btn>         
        </v-card-actions>
    </v-card>

</template>

<script>

export default {
    name: "NoteCard",
    props: {
        note: Object
    }
}
</script>