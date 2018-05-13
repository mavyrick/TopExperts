//import UIKit
//import Foundation
//
//class TableViewDataSource: NSObject, UITableViewDataSource, UITableViewDelegate {
//
//    var expert = [TopExperts]()
//    
//    let expertData = [TopExperts]()
//    
//    func tableView(_ tableView: UITableView, titleForHeaderInSection section: Int) -> String? {
//        return "Top 25 Hedge Fund Managers"
//    }
//    
//    func numberOfSections(in tableView: UITableView) -> Int {
//        return 1
//    }
//    
//    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
//        return expertData.count
//    }
//    
//    func tableView(_ tableView: UITableView, willDisplayHeaderView view: UIView, forSection section: Int){
//        view.tintColor = UIColor.darkGray
//        let header = view as! UITableViewHeaderFooterView
//        header.textLabel?.textColor = UIColor.white
//        header.textLabel?.textAlignment = NSTextAlignment.center
//    }
//    
//    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
//        
//        let cell = tableView.dequeueReusableCell(withIdentifier: "Cell", for: indexPath) as! ExpertTableViewCell
//        
//        let expert = expertData[indexPath.row]
//        
//        cell.expert = expert
//        
//        cell.selectionStyle = .none
//        
//        //        Display TipRanks logo on last expert cell
//        
//        if expert.rank?.ranked == expertData.count {
//            cell.tipRanksLogo.isHidden = false
//            cell.cellDivider.isHidden = true
//        }
//        else {
//            cell.tipRanksLogo?.isHidden = true
//        }
//        
//        return cell
//    }
//    
//}
