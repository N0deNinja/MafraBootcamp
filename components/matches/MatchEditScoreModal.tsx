import React, { useState } from "react";
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Match } from "../../types/stores/types";
import { matchModalStyles } from "../../styles/MatchesStyles";

type MatchEditScoreModalProps = {
    match: Match;
    updateScore: (id: string, score: string) => void;
};

export const MatchEditScoreModal = ({ match, updateScore }: MatchEditScoreModalProps) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { control, handleSubmit, formState: { errors } } = useForm<{ score: string }>({
        defaultValues: {
            score: match.score || '0:0',
        },
    });

    const handleUpdateScore = ({ score }: { score: string }) => {
        updateScore(match.id, score);
        setIsModalVisible(false);
    };

    return (
        <>
            <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                <Text style={matchModalStyles.editScoreButton}>Edit Score</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setIsModalVisible(false)}
            >
                <View style={matchModalStyles.modalContainer}>
                    <View style={matchModalStyles.modalContent}>
                        <Text style={matchModalStyles.modalTitle}>Update Score</Text>
                        <Controller
                            control={control}
                            name="score"
                            rules={{
                                required: "Score is required",
                                pattern: {
                                    value: /^\d{1,2}:\d{1,2}$/,
                                    message: "Invalid score format. Use format X:Y (e.g., 2:1)",
                                },
                            }}
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    style={[matchModalStyles.scoreInput, errors.score && matchModalStyles.errorInput]}
                                    value={value}
                                    onChangeText={onChange}
                                    placeholder="Enter new score (e.g., 2:1)"
                                    keyboardType="numeric"
                                />
                            )}
                        />
                        {errors.score && <Text style={matchModalStyles.errorText}>{errors.score.message}</Text>}
                        <View style={matchModalStyles.modalButtons}>
                            <TouchableOpacity style={matchModalStyles.modalButton} onPress={() => setIsModalVisible(false)}>
                                <Text style={matchModalStyles.modalButtonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[matchModalStyles.modalButton, matchModalStyles.updateButton]}
                                onPress={handleSubmit(handleUpdateScore)}
                            >
                                <Text style={matchModalStyles.modalButtonText}>Update</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    );
};
