import { StyleSheet } from "react-native";

export const matchesPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
    padding: 20,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: "#ccc",
  },
  activeTab: {
    backgroundColor: "#007BFF",
  },
  tabText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export const matchCardStyles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 16,
  },
  leagueText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  dateText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  matchInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export const matchCardScoreStyles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    header: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 16,
    },
    leagueText: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
    dateText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    matchInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    teamContainer: {
        flex: 1,
        alignItems: 'center',
    },
    teamLogo: {
        width: 48,
        height: 48,
        marginBottom: 8,
    },
    teamText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#333',
    },
    scoreContainer: {
        paddingHorizontal: 20,
    },
    scoreText: {
        fontSize: 24,
        fontWeight: '700',
        color: '#22C55E', 
    },
    badge: {
        backgroundColor: '#F3F4F6',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    badgeText: {
        fontSize: 12,
        color: '#666',
    },
});


export const matchFormStyles = StyleSheet.create({
    container: {
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    formGroup: {
      marginBottom: 20,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      padding: 12,
      backgroundColor: '#f9f9f9',
    },
    datePickerButton: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      padding: 12,
      backgroundColor: '#f9f9f9',
    },
    datePickerButtonText: {
      fontSize: 16,
    },
    createButton: {
      backgroundColor: '#007BFF',
      marginTop: 20,
    },
    errorText: {
        color: '#e74c3c',
        fontSize: 14,
        marginTop: 5,
    }
  });

  export const matchCardTeamStyles = StyleSheet.create({
    teamContainer: {
        flex: 1,
        alignItems: 'center',
    },
    teamLogo: {
        width: 48,
        height: 48,
        marginBottom: 8,
    },
    teamText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#333',
    },
});

export const matchModalStyles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    scoreInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        width: 200,
        fontSize: 18,
        marginBottom: 16,
    },
    errorInput: {
        borderColor: '#e74c3c',
    },
    errorText: {
        fontSize: 14,
        color: '#e74c3c',
        marginBottom: 10,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    modalButton: {
        padding: 10,
        borderRadius: 8,
        width: '45%',
        alignItems: 'center',
    },
    updateButton: {
        backgroundColor: '#22C55E',
    },
    modalButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    editScoreButton: {
        fontSize: 14,
        color: '#007BFF',
        textAlign: 'center',
    },
});

  
  