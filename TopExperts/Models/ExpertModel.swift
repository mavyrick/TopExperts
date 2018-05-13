import UIKit
import Foundation

struct TopExperts: Codable {
    let rank : Rank?
    let name : String?
    let pictureUrl : String?
    let averageReturn : Double?
    let numUsersSubscribedToExpert : Int?
    let hedgeFundValue : Int?
    let hedgeFundName : String?
    let isFollowing : Bool?
    
    enum CodingKeys: String, CodingKey {
        
        case rank
        case name = "name"
        case pictureUrl = "pictureUrl"
        case averageReturn = "averageReturn"
        case numUsersSubscribedToExpert = "numUsersSubscribedToExpert"
        case hedgeFundValue = "hedgeFundValue"
        case hedgeFundName = "hedgeFundName"
        case isFollowing = "isFollowing"
    }
    
    init(from decoder: Decoder) throws {
        let values = try decoder.container(keyedBy: CodingKeys.self)
        rank = try values.decodeIfPresent(Rank.self, forKey: .rank)
        name = try values.decodeIfPresent(String.self, forKey: .name)
        pictureUrl = try values.decodeIfPresent(String.self, forKey: .pictureUrl)
        averageReturn = try values.decodeIfPresent(Double.self, forKey: .averageReturn)
        numUsersSubscribedToExpert = try values.decodeIfPresent(Int.self, forKey: .numUsersSubscribedToExpert)
        hedgeFundValue = try values.decodeIfPresent(Int.self, forKey: .hedgeFundValue)
        hedgeFundName = try values.decodeIfPresent(String.self, forKey: .hedgeFundName)
        isFollowing = try values.decodeIfPresent(Bool.self, forKey: .isFollowing)
    }
}

struct Rank : Codable {
    let ranked : Int?
    let outOf : Int?
    let starRating : Double?
    
    enum CodingKeys: String, CodingKey {
        
        case ranked = "ranked"
        case outOf = "outOf"
        case starRating = "starRating"
    }
    
    init(from decoder: Decoder) throws {
        let values = try decoder.container(keyedBy: CodingKeys.self)
        ranked = try values.decodeIfPresent(Int.self, forKey: .ranked)
        outOf = try values.decodeIfPresent(Int.self, forKey: .outOf)
        starRating = try values.decodeIfPresent(Double.self, forKey: .starRating)
    }
}
