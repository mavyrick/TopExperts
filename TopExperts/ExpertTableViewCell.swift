import UIKit
import Foundation
import ImageLoader

class ExpertTableViewCell: UITableViewCell {
    
    @IBOutlet weak var rankLabel: UILabel!
    @IBOutlet weak var nameLabel: UILabel!
    @IBOutlet weak var hedgeFundNameLabel: UILabel!
    @IBOutlet weak var averageReturnLabel: UILabel!
    @IBOutlet weak var hedgeFundValueLabel: UILabel!
    @IBOutlet weak var rankDescriptionLabel: UILabel!
    @IBOutlet weak var expertPicture: UIImageView!
    @IBOutlet weak var followersLabel: UILabel!
    @IBOutlet weak var ratingView: UIProgressView!
    @IBOutlet weak var leftBox: UIImageView!
    @IBOutlet weak var rightBox: UIImageView!
    @IBOutlet weak var followImage: UIImageView!
    @IBOutlet weak var cellDivider: UIImageView!
    
    var expert: TopExperts? {
        didSet {
            self.updateUI()
        }
    }
    
    func updateUI() {
        
        nameLabel?.text = expert?.name
        
        hedgeFundNameLabel?.text = expert?.hedgeFundName
        
        //  My solution to the star rating works by setting the progress track image equal to 5 full stars and having the progress bar overlap them with a bar the same color as the background. This creates the effect of clipping off the end of the stars thus displaying the star rating with the remaining track. :)
        
        ratingView?.progressTintColor = UIColor(rgb: 0x414243)
        ratingView?.transform = CGAffineTransform(scaleX: 1.0, y: 16.0)
        ratingView?.progress = 1 - Float((expert?.rank?.starRating)! / 5)
        
        averageReturnLabel?.text = "+\(String(format: "%.1f", ((expert?.averageReturn)! * 100)))%"
        
        let valueString = String((expert?.hedgeFundValue)!)
        var abbreviation: String
        var divide: Float
        
        //   Change output depending on whether hedge fund value is in billions or millions
        
        if valueString.count >= 10 {
            abbreviation = "B"
            divide = 1000000000
        }
            //   Change abbreviation depending on whether hedge fund value is in billions or millions
            
        else {
            abbreviation = "M"
            divide = 1000000
        }
        
        hedgeFundValueLabel?.text = "$\(String(format: "%.2f", (Float((expert?.hedgeFundValue)!)) / divide))\(abbreviation)"
        
        followersLabel?.text = "Followed by \(String((expert?.numUsersSubscribedToExpert)!)) Investors"
        
        expertPicture?.layer.cornerRadius = (expertPicture?.frame.size.width)! / 2
        expertPicture?.clipsToBounds = true
        expertPicture?.layer.borderWidth = 6
        expertPicture?.layer.borderColor = UIColor(rgb: 0xf89d03).cgColor
        //   Load image using 'ImageLoader' pod
        if expert?.pictureUrl == nil {
            expertPicture?.image = #imageLiteral(resourceName: "no-picture")
        }
        else {
            expertPicture?.load.request(with: "https://cdn.tipranks.com/expert-pictures/\(expert?.pictureUrl ?? "")_tsqr.jpg")
        }
        
        let rank = String((expert?.rank?.ranked)!)
        
        rankLabel?.text = rank
        rankLabel?.layer.cornerRadius = (rankLabel?.frame.size.width)! / 2
        rankLabel?.clipsToBounds = true
        rankLabel?.layer.borderWidth = 2
        rankLabel?.layer.borderColor = UIColor(rgb: 0x7AB9C8).cgColor
        
        rankDescriptionLabel?.text = "Ranked #\(rank) out of \(String((expert?.rank?.outOf)!)) Hedge Fund Managers"
        
        leftBox.addGradientLayer(frame: CGRect(x: 0, y: 0, width: 58, height: 126), colors: [UIColor(rgb: 0x181818), UIColor(rgb: 0x444444), UIColor(rgb: 0x181818)])
        
        rightBox.addGradientLayer(frame: CGRect(x: 0, y: 0, width: 58, height: 126), colors: [UIColor(rgb: 0x377980), UIColor(rgb: 0x5AA4AB), UIColor(rgb: 0x377980)])
        
    }
}

//  Extention to use color codes. Takes color codes as parameters.

extension UIColor {
    convenience init(red: Int, green: Int, blue: Int) {
        assert(red >= 0 && red <= 255, "Invalid red component")
        assert(green >= 0 && green <= 255, "Invalid green component")
        assert(blue >= 0 && blue <= 255, "Invalid blue component")
        
        self.init(red: CGFloat(red) / 255.0, green: CGFloat(green) / 255.0, blue: CGFloat(blue) / 255.0, alpha: 1.0)
    }
    
    convenience init(rgb: Int) {
        self.init(
            red: (rgb >> 16) & 0xFF,
            green: (rgb >> 8) & 0xFF,
            blue: rgb & 0xFF
        )
    }
}

//  Extention to create gradients. Takes gradient colors and dimentions as parameters. Width and height are reversed due to the rotation.

extension UIImageView{
    func addGradientLayer(frame: CGRect, colors:[UIColor]){
        let gradient = CAGradientLayer()
        gradient.frame = frame
        gradient.colors = colors.map{$0.cgColor}
        gradient.transform = CATransform3DMakeRotation(CGFloat.pi / 2, 0, 0, 1)
        gradient.cornerRadius = 7
        self.layer.addSublayer(gradient)
    }
}
