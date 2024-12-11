import { Image, StyleSheet, Text, View } from "react-native";
import { Team } from "../../types/stores/types";
import { matchCardTeamStyles } from "../../styles/MatchesStyles";

type MatchCardTeamProps = Pick<Team, 'logo' | 'name'>;

export const MatchCardTeam = ({logo, name}: MatchCardTeamProps) => {
    return (
        <View style={matchCardTeamStyles.teamContainer}>
        <Image
            source={{ uri: logo }}
            style={matchCardTeamStyles.teamLogo}
        />
        <Text style={matchCardTeamStyles.teamText}>{name}</Text>
    </View>
    )
}


