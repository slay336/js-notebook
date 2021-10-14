<template>
    <v-card>
        <v-card-title>
            <p>{{ title }}</p>
        </v-card-title>
        <v-card-text>
            <p>{{ description }}</p>
        </v-card-text>
        <v-card-actions
            class="d-flex justify-end"
        >            
            <v-btn color="yellow">
                <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn color="green">
                <v-icon color="white">mdi-check</v-icon>
            </v-btn>         
        </v-card-actions>
    </v-card>

</template>

<script>

export default {
    name: "NoteCard",
    props: {
        title: String,
        description: String
    }
}
</script>