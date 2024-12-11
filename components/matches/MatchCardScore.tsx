import { Text, TouchableOpacity, View } from "react-native"
import { matchCardScoreStyles } from "../../styles/MatchesStyles";

type MatchCardScoreProps = {
    isScoreVisible: boolean;
    onScorePress: (isVisible: boolean) => void;
    score: string;
}

export const MatchCardScore = ({ isScoreVisible, onScorePress, score }: MatchCardScoreProps) => {
    return (
        <View style={matchCardScoreStyles.scoreContainer}>
            {isScoreVisible ? (
                <TouchableOpacity onPress={() => onScorePress(true)}>
                    <Text style={matchCardScoreStyles.scoreText}>{score || '0-0'}</Text>
                </TouchableOpacity>
            ) : (
                <View style={matchCardScoreStyles.badge}>
                    <Text style={matchCardScoreStyles.badgeText}>A-TÝM</Text>
                </View>
            )}
        </View>
    )
}

