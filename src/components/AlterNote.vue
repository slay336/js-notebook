<template>
    <v-row justify="center">
        <v-dialog
            v-model="dialog"
            persistent
            max-width="600px"
        >
            <v-card>
                <v-card-title>
                    <span class="text-h5">Редактирование заметки</span>
                </v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col
                            cols="12"
                        >
                            <v-text-field
                                label="Заголовок"
                                name="note-title"
                                v-model="noteTitle"
                                required
                            ></v-text-field>
                            <v-textarea
                                label="Текст заметки"
                                name="note-text"
                                v-model="noteDescription"
                                required
                            ></v-textarea>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions
                    class="d-flex justify-end flex-wrap"
                >
                    <v-btn
                        color="green darken-1"                        
                        dark
                        @click="saveAction()"
                    >
                        Сохранить
                        <v-icon>mdi-check</v-icon>
                    </v-btn>
                    <v-btn
                        color="red darken-1"
                        text
                        @click="dialog = false"
                    >
                        Отменить
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>

export default {
    name: "AlterNote",
    data() {
        return {
            noteId: undefined,
            dialog: false,
            noteTitle: "",
            noteDescription: ""
        }
    },
    methods: {
        open(noteId) {
            this.noteId = noteId;
            if (noteId === undefined) {
                this.noteTitle = "";
                this.noteDescription = "";
            }
            this.dialog = true;
        },
        saveAction() {
            this.dialog = false;
            if (this.noteId === undefined) {
                this.$http.post("http://localhost:5001/add", {
                    title: this.noteTitle,
                    description: this.noteDescription
                })
                    .then(response => {
                        this.$notes = response.data;
                    })
            } else {
                alert("Not implemented");
            }
        }
    }
}

</script>