<template>
    <v-row justify="center">
        <v-dialog
            v-model="dialog"
            persistent
            max-width="600px"
        >
            <v-card>
                <v-form
                    ref="noteForm"
                >
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
                                    :rules="notEmptyRules"
                                    required
                                ></v-text-field>
                                <v-textarea
                                    label="Текст заметки"
                                    name="note-text"
                                    v-model="noteDescription"
                                    :rules="notEmptyRules"
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
                </v-form>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>

export default {
    name: "AlterNote",
    data() {
        return {
            valid: true,
            noteId: undefined,
            dialog: false,
            noteTitle: "",
            noteDescription: "",
            notEmptyRules: [
                v => !!v || "Поле должно быть заполнено!"
            ]
        }
    },
    methods: {
        open(noteId) {
            if (this.$refs.noteForm){
                this.$refs.noteForm.resetValidation();
            }
            this.noteId = noteId;
            this.noteTitle = "";
            this.noteDescription = "";
            if (noteId !== undefined) {
                const matchedNotes = this.$notes.filter(note => note._id === this.noteId);
                if (matchedNotes.length > 0){
                    const currentNote = matchedNotes[0];
                    this.noteTitle = currentNote.title;
                    this.noteDescription = currentNote.description;
                }
            }
            this.dialog = true;
        },
        saveAction() {
            this.valid = this.$refs.noteForm.validate();

            if (!this.valid) return;

            this.dialog = false;
            if (this.noteId === undefined) {
                this.$http.post("http://localhost:5001/add", {
                    title: this.noteTitle,
                    description: this.noteDescription
                })
                    .then(response => {
                        this.$notes = response.data;
                    });
            } else {
                this.$http.post("http://localhost:5001/alter", {
                    id: this.noteId,
                    title: this.noteTitle,
                    description: this.noteDescription
                })
                    .then(response => {
                        this.$notes = response.data;
                    });
            }
        }
    }
}
</script>