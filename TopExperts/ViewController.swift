import UIKit
import Foundation

//  This architecture does not follow the single responsibility principle as much as I would have liked. I wanted to ceate a subclass that handled the table view data source (see "TableViewDataSource.swift file"). However, I ran into numerous bugs implementing it and had to put my table view functions in the main view controller. Therefore, the controller is not as slim as it could be.

class ViewController: UIViewController, UITableViewDataSource, UITableViewDelegate {
    
    @IBOutlet weak var tableView: UITableView!
    
    var topExperts = [TopExperts]()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        getJSON() {
            
            self.tableView.reloadData()
            
        }
        
        tableView.delegate = self as UITableViewDelegate
        tableView.dataSource = self as UITableViewDataSource
        
    }
    
    func tableView(_ tableView: UITableView, titleForHeaderInSection section: Int) -> String? {
        return "Top 25 Hedge Fund Managers"
    }
    
    func numberOfSections(in tableView: UITableView) -> Int {
        return 1
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return topExperts.count
    }
    
    func tableView(_ tableView: UITableView, willDisplayHeaderView view: UIView, forSection section: Int) {
        view.tintColor = UIColor.darkGray
        let header = view as! UITableViewHeaderFooterView
        header.textLabel?.textColor = UIColor.white
        header.textLabel?.textAlignment = NSTextAlignment.center
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        
        let cell = tableView.dequeueReusableCell(withIdentifier: "Cell", for: indexPath) as! ExpertTableViewCell
        
        let expert = topExperts[indexPath.row]
        
        cell.expert = expert
        
        cell.selectionStyle = .none
        
        return cell
        
    }
    
    func getJSON(completed: @escaping () -> ()) {
        
        let url = URL(string: "https://www.tipranks.com/api/experts/GetTop25Experts//?expertType=institutional&period=year")
        
        let task = URLSession.shared.dataTask(with: url!) { (data, response, error) in
            
            do {
                
                let decoder = JSONDecoder()
                self.topExperts = try decoder.decode([TopExperts].self, from: data!)
                
                DispatchQueue.main.async {
                    
                    completed()
                    
                    print(self.topExperts)
                    
                }
                
                return
                
            } catch let err {
                print("Err", err)
            }
        }
        
        task.resume()
    }
    
}
