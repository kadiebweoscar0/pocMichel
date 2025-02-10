import CardConcerUrbain from "../components/cardConerUrbain";
const Calandar = require("../assets/images/calandar.png");
const plcMarthys = require("../assets/images/plcMarthys.png");
const pieceMoney = require("../assets/images/calandar.png");
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function HomeScreen() {
  return (
    <View style={style.container}>
      <ScrollView>
        <View style={{ width: "100%" }}>
          <View style={style.imgHero}>
            <Image
              source={require("../assets/images/concer.png")}
              style={{
                width: "100%",
                height: "100%",
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
              }}
            />

            <TouchableOpacity style={style.buttonBack}>
              <Text style={{ color: "#fff", fontSize: 28, fontWeight: "bold" }}>
                {"<"}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={style.containerIndicator}>
            <View
              style={{
                backgroundColor: "#2ECC71",
                borderRadius: 50,
                padding: 3,
                width: 15,
              }}
            ></View>
            <View style={style.indicator}></View>
            <View style={style.indicator}></View>
            <View style={style.indicator}></View>
          </View>
          <View style={style.like}>
            <Image
              source={require("../assets/images/coeur.png")}
              style={{ width: 30, height: 30 }}
            />
            <Text>+190K</Text>
          </View>
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              paddingHorizontal: 10,
              paddingVertical: 15,
            }}
          >
            <Text
              style={{
                fontSize: 26,
                fontWeight: "bold",
              }}
            >
              Géant Concer urbain
            </Text>
            <Text
              style={{
                color: "#2ECC71",
                paddingHorizontal: 10,
                borderColor: "#2ECC71",
                borderWidth: 2,
                borderRadius: 20,
                fontSize: 20,
              }}
            >
              Concer
            </Text>
          </View>
          <View style={{ paddingHorizontal: 10, gap: 10 }}>
            <CardConcerUrbain
              srcImage={Calandar}
              text1="Mardi 16 Décembre, 2024"
              text2="18:00 - 23:00"
            />

            <CardConcerUrbain
              srcImage={plcMarthys}
              text1="Place Martys"
              text2="Cotonou, Littoral, Benin"
            />
            <CardConcerUrbain
              srcImage={pieceMoney}
              text1="2000 FCFA - 5000FCFA"
              text2="Les prix varient selon le type de ticket choisis"
            />
          </View>

          {/* note & avis */}
          <View>
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                paddingHorizontal: 10,
                paddingVertical: 15,
              }}
            >
              <Text
                style={{
                  fontSize: 26,
                }}
              >
                Note & Avis
              </Text>
              <Text
                style={{
                  color: "#2ECC71",
                  paddingHorizontal: 10,
                  borderColor: "#2ECC71",
                  fontSize: 20,
                }}
              >
                Voir Tout
              </Text>
            </View>
            <View
              style={{
                paddingHorizontal: 12,
                flexDirection: "row",
                alignItems: "center",
                marginTop: -20,
                gap: 10,
              }}
            >
              <View
                style={{
                  gap: 5,
                }}
              >
                <Text
                  style={{
                    fontSize: 72,
                    fontWeight: "bold",
                  }}
                >
                  4,7
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                  }}
                >
                  2,4 Avis
                </Text>
                <Image
                  source={require("../assets/images/etoil.png")}
                  style={{ width: 50 }}
                />
              </View>
              <View style={{ gap: 10, paddingTop: 18 }}>
                <Text
                  style={{
                    backgroundColor: "#2ECC71",
                    width: 250,
                    borderRadius: 50,
                  }}
                ></Text>
                <Text
                  style={{
                    backgroundColor: "#2ECC71",
                    width: 150,
                    borderRadius: 50,
                  }}
                ></Text>
                <Text
                  style={{
                    backgroundColor: "#2ECC71",
                    width: 100,
                    borderRadius: 50,
                  }}
                ></Text>
                <Text
                  style={{
                    backgroundColor: "#2ECC71",
                    width: 50,
                    borderRadius: 50,
                  }}
                ></Text>
                <Text
                  style={{
                    backgroundColor: "#2ECC71",
                    width: 20,
                    borderRadius: 50,
                  }}
                ></Text>
              </View>
            </View>
          </View>

          {/* Description de l'evenement */}
          <View style={{ paddingHorizontal: 12 }}>
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                paddingVertical: 15,
              }}
            >
              <Text
                style={{
                  color: "#2ECC71",
                  fontSize: 20,
                }}
              >
                Plusieurs personnes y vont
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#FFB5B5",
                    width: 45,
                    height: 45,
                    borderRadius: 50,
                  }}
                ></View>
                <View
                  style={{
                    backgroundColor: "#B5E0FF",
                    width: 45,
                    height: 45,
                    borderRadius: 50,
                    marginLeft: -4,
                  }}
                ></View>
                <View
                  style={{
                    backgroundColor: "#DDFFD8",
                    width: 45,
                    height: 45,
                    borderRadius: 50,
                    marginLeft: -4,
                  }}
                ></View>
                <Text style={{ marginLeft: 5, fontSize: 20, color: "#348857" }}>
                  +1k
                </Text>
              </View>
            </View>
            <Text style={{ fontSize: 24, fontWeight: 500 }}>
              Description de l'évenement
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 5,
                padding: 8,
              }}
            >
              <Text
                style={{
                  color: "#828282",
                  fontSize: 20,
                  lineHeight: 34,
                }}
              >
                Dans le cadre des nuits artistiques et culturelles de Cotonou,
                un géant concert gratuit sera donné ce vendredi 30 décembre
              </Text>
              <Image source={require("../assets/images/flecheBas.png")} />
            </View>
          </View>

          {/* artiste invite */}
          <View>
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                paddingHorizontal: 10,
                paddingVertical: 15,
              }}
            >
              <Text
                style={{
                  fontSize: 26,
                }}
              >
                Artistes Invités
              </Text>
              <Text
                style={{
                  color: "#2ECC71",
                  paddingHorizontal: 10,
                  borderColor: "#2ECC71",
                  fontSize: 20,
                }}
              >
                Voir Tout
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 8,
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <View style={{ width: 90, height: 90, borderRadius: 50 }}>
                  <Image
                    source={require("../assets/images/dadju.png")}
                    style={{ width: "100%", height: "100%", borderRadius: 50 }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 20,
                    color: "#828282",
                  }}
                >
                  Dadju
                </Text>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <View style={{ width: 90, height: 90, borderRadius: 50 }}>
                  <Image
                    source={require("../assets/images/Blazz.png")}
                    style={{ width: "100%", height: "100%", borderRadius: 50 }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 20,
                    color: "#828282",
                  }}
                >
                  Blaaz
                </Text>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <View style={{ width: 90, height: 90, borderRadius: 50 }}>
                  <Image
                    source={require("../assets/images/vano.png")}
                    style={{ width: "100%", height: "100%", borderRadius: 50 }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 20,
                    color: "#828282",
                  }}
                >
                  vano
                </Text>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <View
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: 50,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 50,
                    }}
                    imageStyle={{
                      borderRadius: 50,
                    }}
                    source={require("../assets/images/autre+3.png")}
                  >
                    <View
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 50,
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 24,
                          fontWeight: 700,
                          color: "#fff",
                          textAlign: "center",
                        }}
                      >
                        3+
                      </Text>
                    </View>
                  </ImageBackground>
                </View>
                <Text
                  style={{
                    fontSize: 20,
                    color: "#828282",
                  }}
                >
                  Autre
                </Text>
              </View>
            </View>
          </View>

          {/* Gallerie */}
          <View>
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                paddingHorizontal: 10,
                paddingVertical: 15,
              }}
            >
              <Text
                style={{
                  fontSize: 26,
                }}
              >
                Gallerie
              </Text>
              <Text
                style={{
                  color: "#2ECC71",
                  paddingHorizontal: 10,
                  borderColor: "#2ECC71",
                  fontSize: 20,
                }}
              >
                Voir Tout
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 8,
              }}
            >
              <View style={{ width: 120, height: 150, borderRadius: 20 }}>
                <Image
                  source={require("../assets/images/galeri1.png")}
                  style={{ width: "100%", height: "100%", borderRadius: 20 }}
                />
              </View>

              <View style={{ width: 120, height: 150, borderRadius: 20 }}>
                <Image
                  source={require("../assets/images/galeri2.png")}
                  style={{ width: "100%", height: "100%", borderRadius: 20 }}
                />
              </View>

              <View
                style={{
                  width: 120,
                  height: 150,
                  borderRadius: 50,
                }}
              >
                <ImageBackground
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 20,
                  }}
                  imageStyle={{
                    borderRadius: 20,
                  }}
                  source={require("../assets/images/galeri3.png")}
                >
                  <View
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.4)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 20,
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 24,
                        fontWeight: 700,
                        color: "#fff",
                        textAlign: "center",
                      }}
                    >
                      30+
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            </View>
          </View>
          {/* melaine */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
              gap: 10,
            }}
          >
            <View
              style={{
                justifyContent: "center",
                gap: 5,
              }}
            >
              <View style={{ width: 90, height: 90, borderRadius: 50 }}>
                <Image
                  source={require("../assets/images/melani.png")}
                  style={{ width: "100%", height: "100%", borderRadius: 50 }}
                />
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 24,
                  color: "#828282",
                  fontWeight: "bold",
                }}
              >
                Mélaine Jirar
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Text style={{ color: "#2ECC71", fontSize: 20 }}>
                  Créateur Vérifié
                </Text>
                <Image source={require("../assets/images/certifGreen.png")} />
              </View>
            </View>
          </View>

          {/* bootom card */}
          <View
            style={{
              backgroundColor: "#2ECC71",
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              paddingVertical: 25,
              paddingHorizontal: 10,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          >
            <View
              style={{
                gap: 5,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 24,
                  fontWeight: "bold",
                }}
              >
                3000 - 10000 FCFA
              </Text>
              <Text
                style={{
                  color: "#FFDC5D",
                  fontSize: 20,
                }}
              >
                50 Tickes restants
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#fff",
                padding: 15,
                borderRadius: 20,
                width: 180,
                alignItems: "center",
              }}
            >
              <Image source={require("../assets/images/acheter.png")} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgHero: {
    backgroundColor: "#fff",
    width: "100%",
    height: 400,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  buttonBack: {
    backgroundColor: "rgba(0,0,0,0.5)",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: "-88%",
    marginLeft: 10,
  },
  containerIndicator: {
    marginTop: "-12%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  indicator: {
    backgroundColor: "#E9E9E9",
    borderRadius: 50,
    padding: 3,
  },
  like: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    padding: 8,
    width: 100,
    borderRadius: 30,
    marginLeft: "68%",
    marginTop: "4%",
    backgroundColor: "#fff",
  },
  progressBar: {
    backgroundColor: "#2ECC71",
  },
});
