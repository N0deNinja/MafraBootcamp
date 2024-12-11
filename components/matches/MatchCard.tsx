import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { format, isSameDay } from 'date-fns';
import { Match } from '../../types/stores/types';
import { MatchCardTeam } from './MatchCardTeam';
import { MatchCardScore } from './MatchCardScore';
import { MatchEditScoreModal } from './MatchEditScoreModal';
import { getHasMatchStarted } from '../../helpers/getHasMatchStarted';
import { formatMatchDate } from '../../helpers/formatMatchDate';
import { matchCardStyles } from '../../styles/MatchesStyles';

interface MatchCardProps {
    match: Match;
    updateScore: (id: string, score: string) => void;
}

export const MatchCard: React.FC<MatchCardProps> = ({ match, updateScore }) => {
    const [hasMatchStarted, setHasMatchStarted] = useState(getHasMatchStarted(match.date));

    useEffect(() => {
        const interval = setInterval(() => {
            const started = getHasMatchStarted(match.date);
            if (started !== hasMatchStarted) {
                setHasMatchStarted(started);
            }
        }, 1000); 

        return () => clearInterval(interval); 
    }, [match.date, hasMatchStarted]);

    if (!match.teamA || !match.teamB) {
        return null;
    }
    const { teamA, teamB } = match;

    return (
        <View style={matchCardStyles.card}>
            <View style={matchCardStyles.header}>
                <Text style={matchCardStyles.leagueText}>FORTUNA-LIGA</Text>
                <Text style={matchCardStyles.dateText}>
                    {!hasMatchStarted ? formatMatchDate(match.date) : match.score}
                </Text>
            </View>

            <View style={matchCardStyles.matchInfo}>
                <MatchCardTeam name={teamA.name} logo={teamA.logo} />
                <MatchCardScore
                    isScoreVisible={hasMatchStarted}
                    onScorePress={() => {}}
                    score={match.score}
                />
                <MatchCardTeam name={teamB.name} logo={teamB.logo} />
            </View>

            {hasMatchStarted && <MatchEditScoreModal
                match={match}
                updateScore={updateScore}
            />}
        </View>
    );
};