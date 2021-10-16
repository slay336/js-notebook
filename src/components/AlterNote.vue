<template>
    <v-row justify="center">
        <v-dialog
            v-model="dialog"
            persistent
            max-width="600px"
        >
            <template v-slot:activator="{ on }">
                <v-btn
                    v-show="true"
                    color="red"
                    fab
                    dark
                    fixed
                    bottom
                    right
                    v-on="on"
                >
                    <v-icon>mdi-plus</v-icon>    
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h5">Новая заметка</span>
                </v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col
                            cols="12"
                        >
                            <v-text-field
                                label="Заголовок"
                                name="note-title"
                                required
                            ></v-text-field>
                            <v-textarea
                                label="Текст заметки"
                                name="note-text"
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
                        @click="dialog = false"
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
            dialog: false
        }
    }
}

</script>